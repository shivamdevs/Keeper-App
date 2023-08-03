import React from 'react';
import useForm from '../core/useForm';

function AuthLayout() {
    const { addElements } = useForm();
    return (
        <section className="w-full h-[100dvh] flex flex-col flex-nowrap relative bg-teal-100">
            <form action="" method="get">
                <input type="email" name="email" id="email" {...addElements()} />
                <input type="text" name="text" id="text" {...addElements()} />
                <input type="password" name="password" id="password" {...addElements()} />
            </form>
        </section>
    )
}

export default AuthLayout
