import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ResultantProductForHomeConsumption = () => {
  return (
    <>
      <Card className="max-w-4xl mx-auto my-5 bg-gray-100 p-5">
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl">
              Resultant product(clearance for home consumption)
            </h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <Accordion type="single" collapsible className="gap-10">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part I</h1>
                </AccordionTrigger>

                <AccordionContent className="space-y-5 p-3">
                  <p className="text-xl font-light">
                    Resultant Product for Home Consumption
                  </p>

                  <div className="flex gap-3">
                    <div className="flex-1 space-y-3">
                      <Label>Date of removal:</Label>
                      <Input type="date" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Time of removal:</Label>
                      <Input type="time" />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 space-y-3">
                      <Label>GST Invoice No.</Label>
                      <Input placeholder="GST Invoice No." />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Date of removal:</Label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div className=" space-y-3">
                    <Label>Description of Goods:</Label>
                    <Textarea placeholder="Description of goods" />
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 space-y-3">
                      <Label>Quantity with UQC:</Label>
                      <Input placeholder="Quantity with UQC" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Value:</Label>
                      <Input placeholder="Value" />
                    </div>
                  </div>

                  <div className="border p-3 ">
                    <p className="text-xl font-light">Tax Paid </p>
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-3">
                        <Label>GST</Label>
                        <Input placeholder="GST" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <Label>Comp.cess</Label>
                        <Input placeholder="Comp.cess" />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <h1 className="font-semibold text-2xl">Part II</h1>
                </AccordionTrigger>

                <AccordionContent className="space-y-3 p-3">
                  <p className="text-xl font-light">
                    Warehoused goods contained in so much of the resultant
                    products cleared for home consumption
                  </p>

                  <div className="flex gap-3">
                    <div className="flex-1 space-y-3">
                      <Label>Bill of Entry No.:</Label>
                      <Input placeholder="Bill of Entry No" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <Label>Date:</Label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label>Description of Goods:</Label>
                    <Textarea placeholder="Description of Goods" />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 space-y-3">
                      <Label>Quantity with UQC:</Label>
                      <Input placeholder="Quantity with UQC" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Assessable value:</Label>
                      <Input placeholder="Assessable value" />
                    </div>
                  </div>
                  <p className="text-xl font-light">Duty Involved</p>

                  <div className="flex gap-3">
                    <div className="flex-1 space-y-3">
                      <Label>BCD</Label>
                      <Input placeholder="BCD" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>IGST</Label>
                      <Input placeholder="IGST" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <Label>Comp.cess</Label>
                      <Input placeholder="Comp.cess" />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </form>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className="w-96 ">Save</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ResultantProductForHomeConsumption;
