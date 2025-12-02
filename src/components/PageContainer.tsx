interface Props {
    children: React.ReactNode;
}

function PageContainer({ children }: Props) {
    return (
        <div
            style={{
                marginTop: '80px',
                marginBottom: '60px',
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '5rem',
            }}
        >
            {children}
        </div >
    );
}

export default PageContainer;
