"use client"
import React, { useState } from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
import { toast } from 'react-toastify';
interface FormData {
    fastName: string,
    lastName: string,
    email: string,
    message: string

}
const ContactPage = () => {
    const [formData, setFormData] = useState<FormData>({
        fastName: '',
        lastName: "",
        email: "",
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev => ({ ...prev, [name]: value })))
    }
    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        if (!formData.fastName || !formData.lastName || !formData.email || !formData.message) {
            return toast.error("Please fill in all fields!");
        }
        if (formData.fastName || formData.email || formData.lastName || formData.message) {
            toast.success("Your Message Send Successfully!");
            setFormData({
                fastName: '',
                lastName: "",
                email: "",
                message: ''
            })
        }
    }



    return (
        <div className='min-h-screen'>
            <nav className="relative w-full h-[220px] flex items-center justify-center overflow-hidden">

                {/* Background image */}
                <div
                    className="
            absolute inset-0
            bg-[url('https://images.unsplash.com/photo-1522202220-1f1f2b1f3a3c')]
            bg-cover bg-center grayscale
            scale-110
        "
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/75" />

                {/* Content */}
                <div className="relative z-10 text-center space-y-2">
                    <h2 className="
            text-3xl md:text-4xl
            font-extrabold
            tracking-[0.3em]
            uppercase
            text-white
        ">
                        Contact
                    </h2>

                    <p className="text-sm text-gray-300 tracking-wide">
                        We’re here to help you anytime
                    </p>
                </div>

                {/* bottom glow line */}
                <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />
            </nav>

           <div className="container mx-auto my-12 px-4">

    <div className="grid lg:grid-cols-2 gap-10">

        {/* FORM CARD */}
        <form
            onSubmit={handleSubmit}
            className="card bg-base-100 dark:bg-base-200 shadow-xl border border-base-300"
        >
            <div className="card-body space-y-4">

                <h2 className="text-2xl font-bold text-center">
                    Send Your Message
                </h2>

                {/* NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    <input
                        name="fastName"
                        value={formData.fastName}
                        onChange={handleChange}
                        placeholder="First Name"
                        className="input input-bordered w-full"
                    />

                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* EMAIL */}
                <label className="input input-bordered flex items-center gap-2">
                    <AiOutlineMail className="text-lg opacity-70" />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="grow"
                        placeholder="Email Address"
                    />
                </label>

                {/* MESSAGE */}
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full h-40"
                    placeholder="Write your message..."
                />

                {/* BUTTON */}
                <button className="btn btn-primary w-full">
                    Send Message
                </button>
            </div>
        </form>

        {/* INFO CARD */}
        <div className="space-y-5">

            <div className="card bg-base-100 dark:bg-base-200 shadow border border-base-300">
                <div className="card-body flex flex-row gap-4 items-start">
                    <CiLocationOn size={26} />
                    <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-sm opacity-70">
                            E-Bazaar Industries Ltd.<br />
                            Dhanmondi 04, Dhaka
                        </p>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 dark:bg-base-200 shadow border border-base-300">
                <div className="card-body flex flex-row gap-4 items-start">
                    <PiPhoneThin size={26} />
                    <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-sm opacity-70">
                            +880-1390000000<br />
                            +880-1600349990
                        </p>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 dark:bg-base-200 shadow border border-base-300">
                <div className="card-body flex flex-row gap-4 items-start">
                    <AiOutlineMail size={26} />
                    <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-sm opacity-70">
                            support@ebazaar.com<br />
                            help@ebazaar.com
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    {/* MAP */}
    <div className="mt-10">
        <div className="rounded-box overflow-hidden border border-base-300 shadow">
            <iframe
                className="w-full h-[400px]"
                src="https://www.google.com/maps?q=dhaka&output=embed"
                loading="lazy"
            />
        </div>
    </div>

</div>
        </div>
    )
}

export default ContactPage