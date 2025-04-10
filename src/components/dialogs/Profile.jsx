"use client"

import useUserStore from "@/stores/User/useUser";
import useProfileModalStore from "@/stores/User/useProfileModal";

export default function ProfileModal() {
    const { isOpen: isOpenModal, close: closeModal } = useProfileModalStore()
    const { user } = useUserStore()

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

                        <h2 className="text-xl font-semibold mb-4">Profile</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-bold">Name:</label>
                                <p className="ml-2">{user.name}</p>
                            </div>

                            <div>
                                <label className="font-bold">Email:</label>
                                <p className="ml-2">{user.email}</p>
                            </div>

                            <div>
                                <label className="font-bold">Role:</label>
                                <p className="ml-2">{user.role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}