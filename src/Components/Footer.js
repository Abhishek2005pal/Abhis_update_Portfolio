export default function Footer({ darkMode }) {
	return (
		<section 
			className={`p-10 flex justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-emerald-200 text-black'}`}
		>
			<p className="font-bold">
				© Copyright 2024 | All rights are reserved by Abhishek.
			</p>
		</section>
	);
}
