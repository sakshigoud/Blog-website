import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeletePostButton from '../pages/Delete';
// import EditPost from '../pages/Edit';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
interface PostProps {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdDate: string;
}

function PostDetail() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PostProps | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching card data:', error));
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card-detail">
            <Card style={{ width: '35rem', margin: '60px auto' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">"{post.title}"</Card.Title>
                    <Card.Subtitle className="mb-2 ">
                        By {post.author} on {new Date(post.createdDate).toLocaleDateString()}
                    </Card.Subtitle>
                    <Card.Text>{post.content}</Card.Text>
                    <div className="d-flex justify-content-center">
                        <button onClick={() => navigate('/')} className="btn btn-success me-2">Back</button>
                        <Link to={`/edit/${post._id}`}>
                            <Button variant="warning me-2">Edit</Button>
                        </Link>
                        <DeletePostButton postId={post._id} />
                        {/* <button onClick={() => navigate('/edit/:id')} className="btn btn-success me-2">Back</button>
                        <button onClick={() => navigate('/')} className="btn btn-success me-2">Back</button> */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PostDetail;
