import { NextResponse } from "next/server"
import Note from "@/models/Notes"
import { NOTES_MESSAGES, SERVER_MESSAGES, NOTE_MESSAGES } from "@/lib/constants"
import bcrypt from "bcryptjs"

/**
 * Retrieves all notes from the database
 * with specific fields (id and preview)
 * the data is returned based on the page requested.
 * 
 * @param req - Request queries from the client
 * @returns Promise resolving to an array of notes
 */

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const pageQuery = searchParams.get('page') || 1
  const page = pageQuery? +pageQuery : 1
  const searchQuery = searchParams.get('search') || null
  const search = searchQuery? searchQuery : null
  const filterOptions = search? {id : {'$regex': new RegExp(search, "i")}, secret : null} : {secret: null}  
  const limitPage = 10

  try {
    const pages = await Note.find(filterOptions, "id -_id")
    const data = await Note.find(filterOptions, "id preview -_id").skip((page*limitPage)-limitPage).limit(limitPage).sort({createdAt: -1})

    return NextResponse.json(
      {
        message: NOTES_MESSAGES.FOUND + pages.length,
        data,
        amount: pages.length
      },{
        status: 200,
        statusText: NOTES_MESSAGES.FOUND_STATUS
      }
    )
  } catch (err) {
    console.log(err)

    return NextResponse.json({
      message: SERVER_MESSAGES.ERROR,
      data: [],
      amount: 1
    },{
      status: 500,
      statusText: SERVER_MESSAGES.ERROR_STATUS
    })
  }
}

/**
 * Handles the POST request to create a new Note in the database.
 * 
 * @param req - The request object containing the body fields from the client.
 * @returns - Response with the current status.
 */

export async function POST(req: Request) {
  const body = await req.json()
  const { id, content, secret, edit } = body

  try {
    if (!id || !content || !edit) {
      return NextResponse.json({
        message: NOTE_MESSAGES.MISSING_FIELDS,
      },
      {
        status: 400,
        statusText: NOTE_MESSAGES.MISSING_FIELDS_STATUS
      })
    }

    const noteExist = await Note.findOne({id}, 'id').lean()

    if (noteExist) {
      return NextResponse.json({
        message: NOTE_MESSAGES.ERROR_EXISTING,
      },{
        status: 400,
        statusText: NOTE_MESSAGES.ERROR_EXISTING_STATUS
      })
    }
  
    const salt = await bcrypt.genSalt(10);
    const hash = secret? await bcrypt.hash(secret, salt) : null;

    const newNote = new Note({
      id: id.replace(/[^\w\s]|_/g, '_').split(' ').join('_').toLowerCase(),
      content,
      preview: content.substring(0, 20) + "...",
      secret: hash || null,
      edit: edit || null
    });
    

    const noteStatus = await newNote.save()

    if (noteStatus) {
      return NextResponse.json({
        message: NOTE_MESSAGES.SUCCESS_SAVED,
      },{
        status: 200,
        statusText: NOTE_MESSAGES.SUCCESS_STATUS,
      })
    }
    else{
      return NextResponse.json({
        message: SERVER_MESSAGES.ERROR
      },{
        status: 400,
        statusText: SERVER_MESSAGES.ERROR_STATUS
      })
    }

  } catch (err) {
    console.log(err)

    return NextResponse.json({
      message: SERVER_MESSAGES.ERROR
    },{
      status: 500,
      statusText: SERVER_MESSAGES.ERROR_STATUS
    })
  }
}