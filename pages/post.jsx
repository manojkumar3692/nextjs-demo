import {useRouter} from 'next/router';
import MainLayout from '../component/MyLayout';

const Post = (props) => {
    const router = useRouter();
    return  (
        <MainLayout>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content</p>
        </MainLayout>
    )
}

export default Post