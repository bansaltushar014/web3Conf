import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/Home/HomePage";


export default function Home() {
	const [user, setUser] = useState({ addr: "" });
	const [name, setName] = useState();
	const [menteeName, setMenteeName] = useState();
	const [mentorName, setMentorName] = useState();
	const [price, setPrice] = useState();
	const [service, setService] = useState();
	const [currentTimestamp, setCurrentTimestamp] = useState();
	const [meetingSchedule, setMeetingSchedule] = useState();
	const [meetingStatus, setMeetingStatus] = useState();
	const [id, setId] = useState();
	const [rating, setRating] = useState();

	useEffect(() => {
		// fcl.currentUser.subscribe(setUser);
	}, []);

	// const handleLogIn = () => {
	// 	fcl.authenticate();
	// };

	// const handleLogOut = () => {
	// 	fcl.unauthenticate();
	// };

	// const handleGetName = async () => {
	//   const response = await fcl.send([
	//     fcl.script`
	//     import Stuff from 0xStuff

	//     pub fun main(): String{
	//       return Stuff.name
	//     }
	//     `
	//   ])

	//   //(response).then(fcl.decode())

	//   const decodedResponse = await fcl.decode(response);

	//   setName(decodedResponse)
	// }

	// const handleChangeName = async () => {
	//   const txId = await fcl.send([
	//     fcl.transaction`
	//     import Stuff from 0xStuff
	//     transaction(newName: String){
	//       prepare(signer: AuthAccount){

	//       }

	//       execute{
	//         Stuff.changeName(newName: newName)
	//       }
	//     }`,
	//     fcl.args([
	//       fcl.arg(newName, t.String)
	//     ]),
	//     fcl.proposer(fcl.authz),
	//     fcl.payer(fcl.authz),
	//     fcl.authorizations([fcl.authz])
	//   ])
	// }

	
	return (
		<>
			<Navbar user={user} />

			<HomePage />
		</>
	);
}
