export default function ButtonHard({children}: any) {
    return (
        <button className="text-xl rounded-lg px-1 bg-red-500 hover:bg-red-600 text-white px-10 py-4 shadow-2xl">
            {children}
        </button>
    )
}
