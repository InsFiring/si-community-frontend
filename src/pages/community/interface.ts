export interface AddCommunityProps {
    title: string;
    company: string;
    contents: string;
    ratings: number;
    nickname: string;
}

export interface CommunityListProps {
    article_id: 0;
    company: 'string';
    contents: 'string';
    createdAt: 'string';
    deletedAt: {
        time: 'string';
        valid: true;
    };
    id: 0;
    is_modified: 'string';
    likes: 0;
    nickname: 'string';
    ratings: 0;
    title: 'string';
    unlikes: 0;
    updatedAt: 'string';
    view_counts: 0;
}
