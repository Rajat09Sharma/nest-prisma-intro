import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {

    constructor(
        private prisma:PrismaService,
        private userService:UserService
    ){}

    createPost(data:Prisma.postCreateWithoutUserInput,userId:number){
        return this.prisma.post.create({data:{
            ...data,
            userId:userId
        }})
    }

    getPosts(){
        return this.prisma.post.findMany({include:{user:true}});
    }

    async getPostByUserId(userId:number){
        const user=await this.userService.getUserById(userId);
        if(user) return this.prisma.post.findMany({where:{userId}})
    }

}
