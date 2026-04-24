import Image from 'next/image';
interface ProjectProps {
    title: string,
    summary: string
    image: string
}

const Project: React.FC<ProjectProps> = (props) => {
    return (
        <div>
            <h2 className='font-semibold'> {props.title}</h2>
            <div className='flex flex-row '>
                <p className='p-2'>
                    {props.summary}
                </p>
                <Image src={props.image} alt='' width='300' height='100' />
            </div> </div>);
};

export default Project;