import ButtonSimple from "../ButtonSimple";
import ButtonIcon from "../ButtonIcon";

export default function NavBar() {
    return (
        <div className="w-full h-14 md:h-16 bg-gray-300 rounded-lg flex justify-between shadow-2xl">
            <div className="flex">
                <div className="mx-10 self-center">
                    <ButtonSimple>Home</ButtonSimple>
                </div>
                <div className="mx-10 self-center">
                    <ButtonSimple>Postagens</ButtonSimple>
                </div>
            </div>
            <div className="mx-10 self-center">
                <ButtonIcon>Postagens</ButtonIcon>
            </div>
        </div>
    )
}
