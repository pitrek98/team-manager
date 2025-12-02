interface TeamCardProps {
    id: number;
    name: string;
    primaryColor: string;
    secondaryColor: string;
}

export default function TeamCard({ name, primaryColor, secondaryColor }: TeamCardProps) {
    return (
        <div style={{
            width: '220px',
            height: '150px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
            display: 'flex',
            flexDirection: 'column',
        }}>

            <div style={{ display: "flex", height: "60%" }}>
                <div
                    style={{
                        flex: 1,
                        background: primaryColor
                    }}
                />
                <div
                    style={{
                        flex: 1,
                        background: secondaryColor
                    }}
                />
            </div>

            <div
                style={{
                    height: "40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "1.2rem",

                    /* NEW */
                    width: '220px',
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}
            >
                {name}
            </div>
        </div>
    );
}