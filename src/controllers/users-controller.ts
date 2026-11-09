import { prisma } from "@/lib/prisma";
import { NextFunction, Request, Response } from "express";

class UsersController {
  async index(request: Request, response: Response) {
    const users = await prisma.user.findMany();

    return response.json(users);
  }

  async create(request: Request, response: Response, next: NextFunction) {
    const body: unknown = request.body;

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return response.status(400).json({
        message: "Request body must include non-empty name and email strings.",
      });
    }

    const name = "name" in body ? body.name : undefined;
    const email = "email" in body ? body.email : undefined;

    if (
      typeof name !== "string" ||
      name.trim().length === 0 ||
      typeof email !== "string" ||
      email.trim().length === 0
    ) {
      return response.status(400).json({
        message: "Request body must include non-empty name and email strings.",
      });
    }

    try {
      await prisma.user.create({
        data: {
          name,
          email,
        },
      });
    } catch (error) {
      return next(error);
    }

    return response.status(201).json();
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return response.json(user);
  }
}

export { UsersController };
