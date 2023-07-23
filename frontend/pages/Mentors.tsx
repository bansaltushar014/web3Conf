
import ItemDesc from '@/components/Profile/ItemDesc';
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';

type MentorsProps = {

};

const Mentors: React.FC<MentorsProps> = () => {

    return (
        <Box>
            <Grid templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)'
            }} gap={{ base: 6, md: 8, lg: 10 }} alignItems={"center"} py={6} >



                <>
                    {/* {properties.map(item =>
                        <>
                            <ItemDesc key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} description={item.description} link={item.link} />


                        </>

                    )

                    } */}

                    <ItemDesc key={1} name={"Emily Bronte"} location={"Finance"} description={"I am a Financial advisor for 10 years, working with Goldman Sachs and have worked with JP Morgan and morgan Stanley"} area={2600} price={100} fractions={25} docURL={""} imgURL={'https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'} />


                </>


            </Grid>
        </Box>
    )
}
export default Mentors;