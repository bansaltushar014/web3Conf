import { Box, Button, Flex, FormLabel, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, useColorModeValue, ModalFooter, ModalOverlay, Text, Textarea, useDisclosure, Input, Center, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

type ReScheduleCallProps = {
    //Wallet adddress of mentee

    // open: boolean;

    // //callback function that doesn't return anything
    // handleClose: () => void;

};

const ReScheduleCall: React.FC<ReScheduleCallProps> = (props) => {

    const [date, setDate] = useState("");

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

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
        props.updatetime()

    }

    const onsubmit = async () => {
        props.updatetime()

        onClose();

	};

        return (
        <>
            <Button

                bg={"#6F1AB6"}
                color={'white'}
                fontSize={"15"}
                rounded={'md'}
                _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                }}

                onClick={onOpen}>Reschedule</Button>
            {/* <Button ml={4} ref={finalRef}>
                I wil receive focus on close
            </Button> */}

            <Modal

                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Flex bg="brand.300" color={"black"} justifyContent={"center"} p={5}>
                        <Heading fontSize={25}>Schedule a Meet</Heading>
                    </Flex>

                    <ModalCloseButton color={"white"} />
                    <ModalBody pb={6}>

                        <Box p={1} mt={5} >

                            <form onSubmit={handleSubmit}>


                                <Flex justifyContent={"space-between"}>

                                    <Stack >

                                        <FormLabel>Select Date and Time</FormLabel>
                                        <Input
                                            placeholder="Select Date and Time"
                                            size="md"
                                            name="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value as string)}
                                            type="datetime-local"
                                        />



                                        <Flex mt={5} justifyContent={"flex-end"}>
                                            <Button onClick={onsubmit} colorScheme='blue' mr={3}>
                                                Schedule
                                            </Button>
                                            <Button onClick={onClose} bg={"red.500"}>Cancel</Button>
                                        </Flex>

                                    </Stack>

                                </Flex>



                            </form>

                        </Box>


                    </ModalBody>

                    <ModalFooter>
                        <Stack>




                            <Box>
                                {showSuccessMessage && <Text align={"center"} color={"brand.200"} fontWeight={600}>Request Sent Successfully!</Text>}
                                {showFailureMessage && <Text align={"center"} color={"red"} fontWeight={400}>Could not submit the request, please check all the fields and try again!</Text>}
                            </Box>
                        </Stack>



                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ReScheduleCall;