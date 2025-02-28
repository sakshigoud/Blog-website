import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

interface DeletePostButtonProps {
    postId: string;
}

function DeletePostButton({ postId }: DeletePostButtonProps) {
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if (!confirmed) return;

        try {
            const response = await fetch(`http://localhost:5000/api/posts/${postId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            navigate('/');
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        }
    };

    return (
        <>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="danger" onClick={handleDelete}>
                Delete Post
            </Button>
        </>
    );
}

export default DeletePostButton;
