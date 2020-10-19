import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");

	return (
		<div className="text-center mt-5">
			<h1>Traffic Light with React</h1>
			<div className="theStick" />
			<div className="container">
				<span
					className={
						"traffictlightred " + (color == "red" ? "selected" : "")
					}
					onClick={() => setColor("red")}
				/>
				<br />
				<span
					className={
						"traffictlightyellow " +
						(color == "yellow" ? "selected" : "")
					}
					onClick={() => setColor("yellow")}
				/>
				<br />
				<span
					className={
						"traffictlightgreen " +
						(color == "green" ? "selected" : "")
					}
					onClick={() => setColor("green")}
				/>
			</div>
			<p>
				Made by <a href="http://www.4geeksacademy.com">Tibi</a>, with
				love!
			</p>
		</div>
	);
}
// (color == "red" ? "selected" : "") : es una forma "abreviada" de hacer un if, que sería así:
//if(color == red){
//   "selected"
//}else{
//    ""
//};

// className = {
//     "traffictlightred " + (color == "red" ? "selected" : "")
// } esto es modificar una clase (agrega o quita la clase selected)
