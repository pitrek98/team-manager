import './TeamCard.css';

interface TeamCardProps {
    id: number;
    name: string;
    primaryColor: string;
    secondaryColor: string;
}

export default function TeamCard({ name, primaryColor, secondaryColor }: TeamCardProps) {
    return (
        <div className="team-card">
            <div className="team-card-top">
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

            <div className="team-card-bottom">
                {name}
            </div>
        </div>
    );
}