import Layout from '../components/Layout';
import Signup from '../components/auth/signup';
import Link from 'next/link';
import { signup } from '../actions/auth';

const signupPage = () => {
    return (
        <Layout>
          <Signup />
        </Layout>
    );
};

export default signupPage;
