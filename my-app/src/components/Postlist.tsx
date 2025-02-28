import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import CardDetail from './Carddetail';
import Card from 'react-bootstrap/Card';
import '../styles/card.css';

interface PostProps {
    _id: string;
    title: string;
    content: string;
    author: string;
    createdDate: string;
}

//for single card
function Posts({ _id, title, content, author, createdDate, onSelect }: PostProps & { onSelect: () => void }) {
    return (
        <div className="col-md-4 mb-4">
            <Card style={{ width: '24rem', cursor: 'pointer' }} onClick={onSelect}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-4 text-muted">
                        By {author} on {new Date(createdDate).toLocaleDateString()}
                    </Card.Subtitle>
                    <Card.Text>{content.substring(0, 90)}...</Card.Text>
                    <Card.Link href="#" style={{ color: 'green' }}>Read more..</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

//for list of cards
function PostList() {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error in fetching data:', error));
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                {posts.map((post) => (
                    <Posts key={post._id} {...post} onSelect={() => navigate(`/posts/${post._id}`)} />
                ))}
            </div>
        </div>
    );
}


export default PostList;
