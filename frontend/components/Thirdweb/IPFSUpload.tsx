import { Button } from "@chakra-ui/react";
import { useStorageUpload } from "@thirdweb-dev/react";
import React, { useState } from "react";

export default function Upload() {
    const [file, setFile] = useState();
    const { mutateAsync: upload } = useStorageUpload();

    const uploadToIpfs = async () => {
        const uploadUrl = await upload({
            data: [file],
            options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
        });

        //save this uploadurl to MongoDB
        alert(uploadUrl);
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <Button bg={"brand.300"} mt={4} onClick={uploadToIpfs}>Upload</Button>

        </div>
    );
}
