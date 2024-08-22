
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" w-4/12 mx-auto text-center py-9 ">
            <p className=" text-yellow-400 mb-2">---{subHeading}---</p>
            <h3 className=" text-4xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;


// rules: {"react/prop-types": "off"}, // use it in eslint for stop prop-type error.