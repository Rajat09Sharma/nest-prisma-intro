import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('post')
export class PostController {

    constructor(private postService: PostService) { }

    @Get()
    getPosts() {
        return this.postService.getPosts();
    }

    @Post()
    createPost(@Body() createPostDto: CreatePostDto) {

        const {userId,...data}=createPostDto;

        return this.postService.createPost(data,userId);
    }

    @Get(":userId")
    getPostById(@Param("userId", ParseIntPipe) userId: number) {
        return this.postService.getPostByUserId(userId);
    }

}
