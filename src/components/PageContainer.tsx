interface Props {
    children: React.ReactNode;
}

function PageContainer({ children }: Props) {
    return (
        <div
            style={{
                marginTop: '1rem',
                marginBottom: '60px',
                paddingTop: '9rem',
                width: '100%',
                maxWidth: '100vw',
                justifyContent: 'center',
                textAlign: 'center',
                paddingBottom: '2rem',
                zIndex: 5
            }}
        >
            {children}
        </div >
    );
}

export default PageContainer;
