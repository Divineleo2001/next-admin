import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function FormAnnexureB() {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-3xl">Annexure B</h1>
          </CardTitle>
          <CardDescription className="">
            Forms to be maintained by a unit of operating under section 65 of
            the customs Act for the recpt, processingstoms Act and removal of
            goods
          </CardDescription>

          <CardContent>
            <form>
              <div>
                <Label className="text-xl">Name of the Unit</Label>
                <Input type="text" value="Radha Private Ltd" disabled />
              </div>
              <div>
                <Label className="text-xl">Address</Label>
                <Textarea
                  value="123, ABC Road, XYZ City, State, Country, Postal Code"
                  disabled
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label className="text-xl">IEC Number</Label>
                  <Input type="text" value="FAKEIEC12345" disabled />
                </div>

                <div className="flex-1">
                  <Label className="text-xl">GSTIN Number</Label>
                  <Input type="text" value="FAKEGSTIN12345" disabled />
                </div>
              </div>
              <div className="flex-1">
                <Label className="text-xl">GSTIN Number</Label>
                <Input type="text" value="FAKEGSTIN12345" disabled />
              </div>
              <div>
                <Label className="text-xl">Commissionerate</Label>
                <Input type="text" value="Mr. Commissionerate" disabled />
              </div>
            </form>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
}
