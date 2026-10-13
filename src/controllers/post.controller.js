import * as service from '../services/post.service.js';

export const createPost = async (req, res) => {
    const post = await service.createPost(req.params.user, req.body);
    res.status(201).json(post);
};

export const getPostById = async (req, res) => {
    const post = await service.getPostById(req.params.postId);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).end();
    }
}

export const addLike = async (req, res) => {
    const post = await service.addLike(req.params.postId);
    if (post) {
        res.sendStatus(204);
    } else {
        res.status(404).end();
    }
}

export const getPostsByAuthor = async (req, res) => {
    const posts = await service.getPostsByAuthor(req.params.user);
    res.status(200).json(posts);
}

export const addComment = async (req, res) => {
    const post = await service.addComment(
        req.params.postId,
        req.params.commenter,
        req.body.message
    );

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).end();
    }
}

export const deletePost = async (req, res) => {
    const post = await service.deletePost(req.params.postId);

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).end();
    }
}

export const getPostsByTags = async (req, res) => {
    const posts = await service.getPostsByTags(req.query.values);
    res.status(200).json(posts);
}

export const getPostsByPeriod = async (req, res) => {
    const posts = await service.getPostsByPeriod(
        req.query.dateFrom,
        req.query.dateTo
    );
    res.status(200).json(posts);
}

export const updatePost = async (req, res) => {
    const post = await service.updatePost(
        req.params.postId,
        req.body
    );

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).end();
    }
}









