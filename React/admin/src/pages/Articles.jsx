import Title from '../components/Title/Title';
import DynamicModal from '../components/Utils/DynamicModal';
import Table from '../components/Table/Table';
import PostCreate from '../components/Blogs/PostCreate';

export default function Articles({handleShow, handleSave,show,handleClose}) {
    return (
        <div className="container-sm body-container">

            <Title title={'k'} handleShow={handleShow} />
            <DynamicModal
                show={show}
                handleClose={handleClose}
                handleSave={handleSave}
                title="Create post"
                content={<PostCreate />} />
            <Table />
        </div>
    )
}