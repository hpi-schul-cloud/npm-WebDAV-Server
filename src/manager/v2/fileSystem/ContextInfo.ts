import { ResourceType, OpenWriteStreamMode } from './CommonTypes'
import { RequestContext } from '../../../server/v2/RequestContext'
import { Path } from '../Path'

export interface IContextInfo
{
    context : RequestContext
}

export interface OpenWriteStreamInfo extends IContextInfo
{
    targetSource : boolean
    estimatedSize : number
    mode : OpenWriteStreamMode
}
export interface OpenReadStreamInfo extends IContextInfo
{
    targetSource : boolean
    estimatedSize : number
}
export interface MimeTypeInfo extends IContextInfo
{
    targetSource : boolean
}
export interface SizeInfo extends IContextInfo
{
    targetSource : boolean
}
export interface CreateInfo extends IContextInfo
{
    type : ResourceType
}
export interface CopyInfo extends IContextInfo
{
    depth : number
    overwrite : boolean
}
export interface DeleteInfo extends IContextInfo
{
    depth : number
}
export interface MoveInfo extends IContextInfo
{
    overwrite : boolean
}
export interface RenameInfo extends IContextInfo
{
    destinationPath : Path
}
export type PrivilegeManagerInfo = IContextInfo
export type ETagInfo = IContextInfo
export type AvailableLocksInfo = IContextInfo
export type LockManagerInfo = IContextInfo
export type PropertyManagerInfo = IContextInfo
export type ReadDirInfo = IContextInfo
export type CreationDateInfo = IContextInfo
export type LastModifiedDateInfo = IContextInfo
export type WebNameInfo = IContextInfo
export type DisplayNameInfo = IContextInfo
export type TypeInfo = IContextInfo
