"use client"

import { useState } from "react"
import { toast } from "sonner";

import useLoginModalStore from "@/stores/User/useLoginModal"
import useUserStore from "@/stores/User/useUser";

import { postLoginService } from "@/services/Auth"

import SpinLoad from "../common/SpinLoad";

export default function LoginModal() {
    const { isOpen: isOpenModal, close: closeModal } = useLoginModalStore()
    const { setUser } = useUserStore()

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)

    const handleChangesValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        setLoading(true)
        postLoginService(form)
            .then(async (res) => {
                const response = await res.json()

                if (!res.ok) {
                    toast.error("Error login: " + response?.message || "User not logged in")
                    return
                }

                closeModal()
                setForm({
                    email: "",
                    password: ""
                })
                setUser(response.data)

                toast.success("User logged in!")
            })
            .catch((error) => {
                toast.error("Error login: " + error?.message || "User not logged in")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {isOpenModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>

                        <h2 className="text-xl font-semibold mb-4">Log in</h2>

                        <form action={handleSubmit}>
                            <input name="email" disabled={loading} type="email" placeholder="E-mail"
                                className="w-full mb-3 px-4 py-2 border rounded-md" onChange={handleChangesValue} />
                            <input name="password" disabled={loading} type="password" placeholder="Password"
                                className="w-full mb-4 px-4 py-2 border rounded-md" onChange={handleChangesValue} />

                            {loading && <SpinLoad />}

                            {!loading && (
                                <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                                    Log in
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}