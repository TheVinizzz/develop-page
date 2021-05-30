export default function ButtonSimple({children}: any) {
    return (
        <button className="text-xl rounded-full hover:bg-gray-400 px-1">
            {children}
        </button>
    )
}
