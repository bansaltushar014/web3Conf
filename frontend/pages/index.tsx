import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ethers } from "ethers";
import { Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/Home/HomePage";


export default function Home() {
	const [user, setUser] = useState({ addr: "" });
	const [id, setId] = useState();
	const [provider, setProvider] = useState();

	useEffect(() => {

	}, []);

	const login = async () => {
		console.log("Request Account .....");
		if (window.ethereum) {
			console.log("detected!");
			try {
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});
				console.log(accounts);
			} catch (error) {
				console.log("Error connecting!");
			}
			const providerTemp = new ethers.providers.Web3Provider(window.ethereum);
			setProvider(providerTemp)
		} else {
			alert("Meta Mask not detected!");
		}
	}
	
	return (
		<>
			<Navbar user={user} login={login}/>

			<HomePage provider={provider} />
		</>
	);
}
