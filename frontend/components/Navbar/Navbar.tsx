import { Flex, Box } from "@chakra-ui/layout";
// import { Box } from '@chakra-ui/react/dist';
import React from "react";
import { ethers } from "ethers";
import { Button, Input, Link, Text, Heading } from "@chakra-ui/react";
import JoinMentor from "../PopUp/JoinMentor";

type NavbarProps = {
	user: any;
	handleLogIn: () => void;
	handleLogOut: () => void;
};

const Navbar: React.FC<NavbarProps> = (props) => {
	const reqestAccount = async () => {
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
		} else {
			alert("Meta Mask not detected!");
		}
	};

    const connectWallet = async () => {
        const abi = [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "num",
                        "type": "uint256"
                    }
                ],
                "name": "store",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "retrieve",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ]
        if(typeof window.ethereum !== 'undefined'){
            await reqestAccount();
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider)
            const signer = provider.getSigner()
            const daiContract = new ethers.Contract('0x5BE42058940b8cb71768342378388d945981dD3a', abi, provider);   
            const daiContractWithSigner = daiContract.connect(signer);
            daiContractWithSigner.store("5");

        }
    }

	return (
		<Flex backgroundColor={"brand.100"} height={"65px"} justifyContent={"flex-end"} p={3}>
			<Heading mr={"60%"} color={"white"}>
				FlowMentor
			</Heading>
			{props.user.addr ? props.user.addr : ""}
			<Link href="/Meets">
				<Button
					bg={"black"}
					color={"white"}
					fontSize={"15"}
					rounded={"md"}
					_hover={{
						transform: "translateY(-2px)",
						boxShadow: "lg",
					}}>
					View My Meets
				</Button>
			</Link>

			<JoinMentor />
			{props.user.addr ? (
				<Button fontSize={"15"} rounded={"md"} onClick={props.handleLogOut}>
					Log Out
				</Button>
			) : (
				<Button fontSize={"15"} rounded={"md"} onClick={connectWallet}>
					Log In
				</Button>
			)}
		</Flex>
	);
};
export default Navbar;
