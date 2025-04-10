"use client"

import { useState } from "react";
import { toast } from "sonner";

import useRegisterModalStore from "@/stores/User/useRegisterModal";
import { postRegisterService } from "@/services/Auth";
import { useBanner } from "@/contexts/Banner";

import SpinLoad from "../common/SpinLoad";

export default function RegisterModal() {
    const { isOpen: isOpenModal, close: closeModal } = useRegisterModalStore();
    const { closeBanner } = useBanner();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChangesValue = (e) => {
        const { name, value } = e.target;

        if (name === "name") setName(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };
    const handleSubmit = async () => {
        setLoading(true);
        postRegisterService({
            name,
            email,
            password,
            role: "CLIENT"
        })
            .then(async (res) => {
                
                if (!res.ok) {
                    const error = await res.json();
                    toast.error("Error register: "+error?.message || "User not created" );
                    return;
                }
                
                closeBanner();
                closeModal();
                
                setName("");
                setEmail("");
                setPassword("");
                
                toast.success("User created!");
            })
            .catch((err) => {
                toast.error("Error register: " + err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };
    const handleClose = () => {
        closeModal();
        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            {isOpenModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Sign in</h2>

                        <form action={handleSubmit}>
                            <input name="name" disabled={loading} type="text" placeholder="Name" className="w-full mb-3 px-4 py-2 border rounded-md" onChange={handleChangesValue} />
                            <input name="email" disabled={loading} type="email" placeholder="E-mail" className="w-full mb-3 px-4 py-2 border rounded-md" onChange={handleChangesValue} />
                            <input name="password" disabled={loading} type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 border rounded-md" onChange={handleChangesValue} />
                            {loading && <SpinLoad />}
                            {!loading && (
                                <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                                    Sign in
                                </button>

                            )}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}