import Link from "next/link";

export default function ForgetPasswordBox() {
    return (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
            <form className="mt-6">
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-stone-950 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-600 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500">
                        Send Mail
                </button>
                </div>
            </form>
        </div>
    );
}