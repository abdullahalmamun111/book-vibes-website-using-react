import BookImg from '../../src/assets/books.jpg'

const Banner = (props) => {
    return (
        <div className="hero bg-base-200 p-5 md:p-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
          <div className='md:w-[50%] w-[100%] md:flex justify-center items-center'>
          <img
            src={BookImg}
            className="w-[500px] md:w-[100%] md:max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className='w-[100%] md:w-[50%] space-y-6'> 
            <h1 className="text-2xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
           
            <button className="btn bg-[#23BE0A] text-white">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;