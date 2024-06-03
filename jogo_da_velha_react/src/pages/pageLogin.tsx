import { LogoImg } from '@/assets/imgs/index';
import { login } from '@/services/api/auth';
import { GoogleLogin } from '@react-oauth/google';

export const PageLogin = () => {
    return (
        <main className="flex flex-col justify-center items-center gap-16 min-h-screen">
            <section className="flex flex-col justify-center items-center gap-8">
                <img src={LogoImg} alt="Logo" />

                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-3xl font-semibold'>Bem-vindo</h1>
                    <span className='text-xl text-slate-600 font-semibold'>
                        Faça login para continuar.
                    </span>
                </div>
            </section>

            <GoogleLogin
                onSuccess={ async (credentials) => {
                    await login(credentials.credential || '');
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </main>
    );
}