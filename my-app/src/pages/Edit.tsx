import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/Form';

function EditPost() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState<{ title: string; content: string; author: string } | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setInitialValues({ title: data.title, content: data.content, author: data.author }))
            .catch(err => console.error('Failed to fetch post:', err));
    }, [id]);

    const handleSubmit = async (formData: { title: string; content: string; author: string }) => {
        try {
            const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to update post');
            }
            navigate(`/posts/${id}`);
            // alert('Post updated successfully');
        } catch (err: any) {
            console.error(err.message || 'An error occurred');
        }
    };

    return initialValues ? (
        <PostForm formTitle="Edit Post" initialValues={initialValues} onSubmit={handleSubmit} submit="Update" />
    ) : (
        <div>Loading...</div>
    );
}

export default EditPost;
