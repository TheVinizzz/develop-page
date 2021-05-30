import NavBar from "../components/Navbar";
import ButtonHard from "../components/ButtonHard";
import TopBar from "../components/TopBar";

export default function Home() {
	return (
		<div>
			<div className="home-background overflow-hidden">
				<div className="container mx-auto h-full">
					<TopBar />
					<NavBar />
					<div className="h-full max-w-5xl pt-40">
						<h1 className="text-white font-bold text-6xl self-center">
							"Se você passar tempo com os animais, corre o risco de se tornar uma pessoa melhor"
						</h1>
						<h2 className="text-white font-bold text-4xl self-center w-full text-right mt-2 mr-6">
							Oscar Wilde.
						</h2>
						<div className="mt-28">
							<ButtonHard>
								Ver Postagens
							</ButtonHard>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}
