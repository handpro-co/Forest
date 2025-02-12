import AWS from "aws-sdk";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function POST(req: Request) {
  const body = await req.json();
  body.id = uuidv4();
  if (body) {
    const bucketName = process.env.AWS_S3_BUCKET_NAME;
    if (!bucketName) {
      return NextResponse.json(
        { message: "AWS S3 bucket name is not configured" },
        { status: 500 }
      );
    }

    const fileName = `feedback-${Date.now()}.json`;
    const params: AWS.S3.PutObjectRequest = {
      Bucket: bucketName,
      Key: fileName,
      Body: JSON.stringify(body),
      ContentType: "application/json",
      ACL: "public-read",
    };

    try {
      await s3.upload(params).promise();

      return NextResponse.json(
        {
          message: "Feedback received and saved successfully",
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      return NextResponse.json(
        { message: "Failed to save feedback" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: "No feedback data received" },
      { status: 400 }
    );
  }
}
