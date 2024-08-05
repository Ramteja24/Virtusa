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

        create: procedure.input($Schema.ExamInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exam.create(input as any))),

        delete: procedure.input($Schema.ExamInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exam.delete(input as any))),

        findFirst: procedure.input($Schema.ExamInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).exam.findFirst(input as any))),

        findMany: procedure.input($Schema.ExamInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).exam.findMany(input as any))),

        findUnique: procedure.input($Schema.ExamInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).exam.findUnique(input as any))),

        update: procedure.input($Schema.ExamInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).exam.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    create: {

        useMutation: <T extends Prisma.ExamCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExamCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExamCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExamCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExamGetPayload<T>, Context>) => Promise<Prisma.ExamGetPayload<T>>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ExamDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExamDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExamDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExamDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExamGetPayload<T>, Context>) => Promise<Prisma.ExamGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ExamFindFirstArgs, TData = Prisma.ExamGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExamFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ExamGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExamFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExamFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ExamGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExamGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ExamFindManyArgs, TData = Array<Prisma.ExamGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ExamFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ExamGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExamFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExamFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ExamGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ExamGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ExamFindUniqueArgs, TData = Prisma.ExamGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExamFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ExamGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExamFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExamFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ExamGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExamGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    update: {

        useMutation: <T extends Prisma.ExamUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExamUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExamGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ExamGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExamUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExamUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExamGetPayload<T>, Context>) => Promise<Prisma.ExamGetPayload<T>>
            };

    };
}
