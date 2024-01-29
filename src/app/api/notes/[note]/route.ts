import { NextResponse } from "next/server"
import Note from "@/models/Notes"
import { NOTE_MESSAGES, SERVER_MESSAGES } from "@/lib/constants"
import { INote } from "@/types"
import bcrypt from 'bcryptjs'

/**
 * Handles the request to retrieve a specific Note from the database.
 *
 * @param req - The request object.
 * @param params.note - The identifier of the Note to retrieve.
 * @returns - Promise resolving to the response object.
 */

export async function GET(req: Request, { params }: { params: { note: string } }) {

  try {
    const data: INote | null = await Note.findOne({id: (params.note).toLowerCase()}, "id content createdAt secret -_id").lean()

    if (data) {
      if (data.secret) {
        return NextResponse.json(
          {
            message: NOTE_MESSAGES.SECURED,
            data: null,
            secured: true
          },{
            status: 200,
            statusText: NOTE_MESSAGES.SECURED_STATUS
          }
        )

      }else{
        return NextResponse.json(
          {
            message: NOTE_MESSAGES.FOUND,
            data,
            secured: false
          },{
            status: 200,
            statusText: NOTE_MESSAGES.FOUND_STATUS
          }
        )
      }
    }
    else
    {
      return NextResponse.json(
        {
          data: {
            id: 404,
            content: NOTE_MESSAGES.NOTFOUND,
            secret: false
          },
          secured: false
        },{
          status: 404,
          statusText: NOTE_MESSAGES.NOTFOUND_STATUS
        }
      )
    }
  } catch (err) {
    console.log(err)

    return NextResponse.json({
      message: SERVER_MESSAGES.ERROR,
      data: {
        id: 500,
        content: SERVER_MESSAGES.ERROR,
        private: false
      },
      secured: false
    },{
      status: 500,
      statusText: SERVER_MESSAGES.ERROR_STATUS
    })
  }
}

/**
 * Handles the POST request to access into a private Note in the database.
 * 
 * @param req - The request object containing the body fields from the client.
 * @returns - Response with the current status.
 */

export async function POST(req: Request, { params }: { params: { note: string } }) {

  const body = await req.json()
  const { secret } = body

  try {
    if (!secret) {
      return NextResponse.json(
      {
        message: NOTE_MESSAGES.MISSING_KEY
      },
      {
        status: 400,
        statusText: NOTE_MESSAGES.MISSING_KEY_STATUS
      })
    }

    const data: INote | null = await Note.findOne({id: params.note}, 'id content secret -_id').lean()

    if (data && await bcrypt.compare(
        secret,
        data.secret,
      )) {
      return NextResponse.json(
        {
          message: NOTE_MESSAGES.FOUND,
          data
        },
        {
          status: 200,
          statusText: NOTE_MESSAGES.FOUND_STATUS
        }
      )
    }
    else
    {
      return NextResponse.json({
        message: NOTE_MESSAGES.ERROR_CREDENTIAL,
        data: null,
      },{
        status: 400,
        statusText: NOTE_MESSAGES.ERROR_CREDENTIAL_STATUS
      })
    }
  } catch (err) {
    console.log(err)

    return NextResponse.json({
      message: SERVER_MESSAGES.ERROR,
      data: null,
    },{
      status: 500,
      statusText: SERVER_MESSAGES.ERROR_STATUS
    })
  }
}