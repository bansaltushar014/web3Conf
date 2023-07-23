import {
	Box,
	Button,
	Flex,
	FormLabel,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	useColorModeValue,
	ModalFooter,
	ModalOverlay,
	Stack,
	Text,
	Textarea,
	useDisclosure,
	Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import IPFSUpload from "../Thirdweb/IPFSUpload";

type JoinMentorProps = {
	//Wallet adddress of mentee
	// open: boolean;
	// //callback function that doesn't return anything
	// handleClose: () => void;
};

const JoinMentor: React.FC<JoinMentorProps> = () => {
	const [name, setName] = useState("");

	const [price, setPrice] = useState("");
	const [service, setService] = useState("");
	const [description, setDescription] = useState("");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);
	//TO-DO
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// const { error } = "hi";

		let error = true;

		if (error) {
			console.log(error);
			setShowSuccessMessage(false);
			setShowFailureMessage(true);

			return;
		}

		setShowSuccessMessage(true);
		setShowFailureMessage(false);
	};
	return (
		<>
			<Button
				bg={"black"}
				color={"white"}
				fontSize={"15"}
				rounded={"md"}
				_hover={{
					transform: "translateY(-2px)",
					boxShadow: "lg",
				}}
				onClick={onOpen}>
				Become a Mentor
			</Button>
			{/* <Button ml={4} ref={finalRef}>
                I wil receive focus on close
            </Button> */}

			<Modal
				initialFocusRef={initialRef}
				finalFocusRef={finalRef}
				isOpen={isOpen}
				onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<Flex bg="brand.300" color={"black"} justifyContent={"center"} p={5}>
						<Heading fontSize={25}>Become a Mentor</Heading>
					</Flex>

					<ModalCloseButton color={"white"} />
					<ModalBody pb={6}>
						<Box p={1} mt={5}>
							<form onSubmit={handleSubmit}>
								<FormLabel fontWeight={800}>Name</FormLabel>
								<Input
									mb={7}
									type="text"
									name="name"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
									ref={initialRef}
									placeholder="Name of the Property"
								/>

								<FormLabel fontWeight={800}>Service</FormLabel>
								<Input
									name="service"
									mb={7}
									type="text"
									value={service}
									onChange={(e) => {
										setService(e.target.value);
									}}
									placeholder="Service you provide"
								/>

								<FormLabel fontWeight={800}>Description</FormLabel>
								<Textarea
									mb={7}
									name=" "
									value={description}
									onChange={(e) => {
										setDescription(e.target.value);
									}}
									placeholder="Tell more about yourself"
								/>

								<FormLabel fontWeight={800}>Hourly Rate</FormLabel>
								<Input
									name="price"
									mb={7}
									type="number"
									value={price}
									onChange={(e) => {
										setPrice(e.target.value);
									}}
									placeholder="Rate in Flow Tokens"
								/>
								<FormLabel fontWeight={800}>Upload Proof of Work</FormLabel>

								<IPFSUpload />

								<Flex justifyContent={"flex-end"}>
									<Button onClick={onClose} colorScheme="blue" mr={3}>
										Submit
									</Button>
									<Button onClick={onClose}>Cancel</Button>
								</Flex>
							</form>
						</Box>
					</ModalBody>
					<ModalFooter>
						<Stack>
							<Box>
								{showSuccessMessage && (
									<Text align={"center"} color={"brand.200"} fontWeight={600}>
										Request Sent Successfully!
									</Text>
								)}
								{showFailureMessage && (
									<Text align={"center"} color={"red"} fontWeight={400}>
										Could not submit the request, please check all the fields
										and try again!
									</Text>
								)}
							</Box>
						</Stack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default JoinMentor;
