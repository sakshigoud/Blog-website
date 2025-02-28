import { useNavigate } from 'react-router-dom';
import PostForm from '../components/Form';

function CreatePost() {
    const navigate = useNavigate();

    const handleSubmit = async (formData: { title: string; content: string; author: string }) => {
        try {
            const response = await fetch('http://localhost:5000/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to create post');
            }
            navigate('/');
            alert('Post created successfully');
        } catch (err: any) {
            console.error(err.message || 'An error occurred');
        }
    };

    return <PostForm formTitle="Create New Post" onSubmit={handleSubmit} submit='Create' />;
}

export default CreatePost;
