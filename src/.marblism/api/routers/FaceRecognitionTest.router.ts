/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        create: procedure.input($Schema.FaceRecognitionTestInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faceRecognitionTest.create(input as any))),

        delete: procedure.input($Schema.FaceRecognitionTestInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faceRecognitionTest.delete(input as any))),

        findFirst: procedure.input($Schema.FaceRecognitionTestInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).faceRecognitionTest.findFirst(input as any))),

        findMany: procedure.input($Schema.FaceRecognitionTestInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).faceRecognitionTest.findMany(input as any))),

        findUnique: procedure.input($Schema.FaceRecognitionTestInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).faceRecognitionTest.findUnique(input as any))),

        update: procedure.input($Schema.FaceRecognitionTestInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).faceRecognitionTest.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.FaceRecognitionTestCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaceRecognitionTestCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FaceRecognitionTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FaceRecognitionTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaceRecognitionTestCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaceRecognitionTestCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FaceRecognitionTestGetPayload<T>, Context>) => Promise<Prisma.FaceRecognitionTestGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.FaceRecognitionTestDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaceRecognitionTestDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FaceRecognitionTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FaceRecognitionTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaceRecognitionTestDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaceRecognitionTestDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FaceRecognitionTestGetPayload<T>, Context>) => Promise<Prisma.FaceRecognitionTestGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.FaceRecognitionTestFindFirstArgs, TData = Prisma.FaceRecognitionTestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FaceRecognitionTestFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FaceRecognitionTestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FaceRecognitionTestFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FaceRecognitionTestFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FaceRecognitionTestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FaceRecognitionTestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.FaceRecognitionTestFindManyArgs, TData = Array<Prisma.FaceRecognitionTestGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.FaceRecognitionTestFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.FaceRecognitionTestGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FaceRecognitionTestFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FaceRecognitionTestFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FaceRecognitionTestGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.FaceRecognitionTestGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.FaceRecognitionTestFindUniqueArgs, TData = Prisma.FaceRecognitionTestGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FaceRecognitionTestFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FaceRecognitionTestGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FaceRecognitionTestFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FaceRecognitionTestFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FaceRecognitionTestGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FaceRecognitionTestGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.FaceRecognitionTestUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FaceRecognitionTestUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FaceRecognitionTestGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FaceRecognitionTestGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FaceRecognitionTestUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FaceRecognitionTestUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FaceRecognitionTestGetPayload<T>, Context>) => Promise<Prisma.FaceRecognitionTestGetPayload<T>>
            };

    };
}
