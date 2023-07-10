import { useState } from "react";
// import axios from "axios";
import { BiRightArrowAlt } from "react-icons/bi";

const Body = () => {
    const [formInput, setFormInput] = useState({ notif: '', email: '' });
    const [buttonClicked, setButtonClicked] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("https://emaildigestbackend.onrender.com/api/v1/sending-email-digest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInput),

        })
        console.log(response.data);
        setFormInput({ notif: '' })
    }

    const handleClick = () => {
        setButtonClicked(true);
        // Perform your button action here

        // Reset the button feedback after a certain duration
        setTimeout(() => {
            setButtonClicked(false);
        }, 100);
    };

    const onChangeHandler = e => {
        const value = e.target.name === 'email' ? e.target.value.trim() : e.target.value;

        setFormInput((prev) => (
            {
                ...prev,
                [e.target.name]: value
            }
        ))
    }
    return (
        <div className="flex flex-col justify-evenly h-full w-screen mx-12 my-12 ">
            <h1 className="text-5xl font-bold -mt-[5rem]  ">Email Digest Playground</h1>
            <p className="-mt-[4rem]">Don't know how to? Start <a className="underline" href="https://docs.novu.co/platform/digest/"> here</a></p>
            <form className="flex flex-col space-y-8 -mt-[6rem] w-[80vw]" onSubmit={onSubmitHandler}>
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col flex-grow mt-8">
                        <label htmlFor="email" className="w-48">
                            Email:
                        </label>
                        <input
                            className="w-72 py-3 border-2 rounded-xl"
                            placeholder="Your Email here"
                            value={formInput.email}
                            id="email"
                            name="email"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="notif" className="w-48">
                            Notification:
                        </label>
                        <textarea
                            className="w-72 py-3 border-2 rounded-xl"
                            placeholder="Enter the notification text"
                            value={formInput.notif}
                            id="notif"
                            name="notif"
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>

                <button onClick={handleClick} className={`bg-[#8741dd] text-white hover:bg-gray-800 cursor-pointer py-2 max-w-[5.5rem] flex items-center justify-between text-[1.8rem] px-8 transition-colors ${buttonClicked ? "bg-gray-800 text-gray-300 scale-95" : ""
                    }`} type="submit">

                    <BiRightArrowAlt className="text-2xl" />
                </button>
            </form>
        </div>
    )
}

export default Body