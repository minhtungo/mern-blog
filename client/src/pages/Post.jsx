import { Link } from 'react-router-dom';
import Menu from './../components/Menu';

const Post = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas='
          alt=''
        />
        <div className='user'>
          <img src='' alt='' />
          <div className='info'>
            <span>Minh</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src='' alt='' />
            </Link>
          </div>
        </div>
        <h1>Lorem Ipsum</h1>
        <p>Lorem Ipsum</p>
      </div>
      <Menu />
    </div>
  );
};
export default Post;
