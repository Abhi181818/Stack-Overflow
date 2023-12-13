import { CloudinaryContext } from 'cloudinary-react';

const cloudinaryConfig = {
    cloudName: 'dca7yxbfr',
    apiKey: '519861223643126',
    apiSecret: 'NpLpRcMDI7neZnpODHHpF5Zinzg',
};

const CloudinaryContextProvider = ({ children }) => (
    <CloudinaryContext cloudName={cloudinaryConfig.cloudName} apiKey={cloudinaryConfig.apiKey} apiSecret={cloudinaryConfig.apiSecret}>
        {children}
    </CloudinaryContext>
);

export default CloudinaryContextProvider;