import { useState, ChangeEvent, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface PostFormProps {
    initialValues?: {
        title: string;
        content: string;
        author: string;
    };
    onSubmit: (formData: { title: string; content: string; author: string }) => void;
    formTitle: string;
    submit: string;
}

function PostForm({ initialValues, onSubmit, formTitle, submit }: PostFormProps) {
    const [formData, setFormData] = useState({
        title: initialValues?.title || '',
        content: initialValues?.content || '',
        author: initialValues?.author || ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="container mt-5 bg-secondary border rounded" style={{ maxWidth: '500px' }}>
            <h2 className="text-center">{formTitle}</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle" className="mb-3 ">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formAuthor" className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Enter author name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formContent" className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Enter content"
                        rows={5}
                        required
                    />
                </Form.Group>
                <div className='d-flex justify-content-center mb-3'>

                    {/* <button onClick={() => window.history.back()} className="btn btn-success me-2">Back</button> */}
                    <Button variant="success" type="submit" onClick={() => window.history.back()}>
                        Back
                    </Button>
                    <Button className="ms-2" variant="success" type="submit">
                        {submit}
                    </Button>
                </div>

            </Form>
        </div>
    );
}

export default PostForm;
