import { ColorRing } from 'react-loader-spinner'

export default function Loader() {
    return <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    </div>
}