import './PageContainer.css';

interface Props {
    children: React.ReactNode;
}

function PageContainer({ children }: Props) {
    return (
        <div className='page-container'>
            {children}
        </ div >
    );
}

export default PageContainer;
