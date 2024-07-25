"use client";

import { Form } from "@/ui/form/form";
import { useState } from "react";
import {
  AGERANGES,
  calculatePremiumSchema,
  EMPLOYMENTTYPE,
  INDUSTRIES,
  PROVINCES,
  SALARYRANGES,
} from "./calculate-premium-schema";
import {
  FormActionRow,
  FormDivider,
  FormSection,
  FormSectionCol,
} from "@/ui/form/layout";
import { Select, SelectItem } from "@/ui/form/select";
import { Button } from "@/ui/button";
import { Modal, ModalContent, ModalTitle } from "@/ui/overlay/modal";
import { TextInput } from "@/ui/form/text-input";
import { X } from "lucide-react";

export function CalculatePremiumForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [age, setAge] = useState<number | null>(null);
  const [premiumModal, setPremiumModal] = useState<boolean>(false);

  return (
    <div>
      <Form
        schema={calculatePremiumSchema}
        onSubmit={(values) => {
          setIsLoading(true);
          setPremiumModal(true);
          setIsLoading(false);
        }}
      >
        <FormSection
          title="Personal Information"
          description="Some description explaining why this info is needed."
        >
          <FormSectionCol colSpan={3}>
            <Select
              isRequired
              label="Age"
              id="age"
              name="age"
              items={AGERANGES}
              onSelectionChange={(key) => setAge(Number(key))}
            >
              {(item) => <SelectItem>{item.name}</SelectItem>}
            </Select>
          </FormSectionCol>

          <FormSectionCol colSpan={3}>
            <Select
              isRequired
              label="Province"
              id="province"
              name="province"
              items={PROVINCES}
            >
              {(item) => <SelectItem>{item.name}</SelectItem>}
            </Select>
          </FormSectionCol>
        </FormSection>
        <FormDivider />
        <FormSection
          title="Job Information"
          description="Something about why this info is important"
        >
          {" "}
          <FormSectionCol colSpan={2}>
            <Select
              isRequired
              label="Employment Type"
              id="employmentType"
              name="employmentType"
              items={EMPLOYMENTTYPE}
            >
              {(item) => <SelectItem>{item.name}</SelectItem>}
            </Select>
          </FormSectionCol>
          <FormSectionCol colSpan={2}>
            <Select
              isRequired
              label="Salary"
              id="salary"
              name="salary"
              placeholder={
                !age
                  ? "Please select age to enable salary ranges"
                  : "Select an item"
              }
              items={SALARYRANGES.find((x) => x.age === age)?.salary}
              isDisabled={!age}
            >
              {(item) => <SelectItem>{item.name}</SelectItem>}
            </Select>
          </FormSectionCol>
          <FormSectionCol colSpan={2}>
            <Select
              isRequired
              label="Industry"
              id="industry"
              name="industry"
              items={INDUSTRIES}
            >
              {(item) => <SelectItem>{item.name}</SelectItem>}
            </Select>
          </FormSectionCol>
        </FormSection>
        <FormActionRow>
          <Button type="submit" isLoading={isLoading}>
            Calculate
          </Button>
        </FormActionRow>
      </Form>
      <Modal isOpen={premiumModal}>
        <ModalTitle>
          <div className="flex items-start">
            <div className="text-primary">
              Your Premium would be approximately $XX.XX per month!
            </div>
            <Button
              onPress={() => setPremiumModal(false)}
              variant="noBackground"
            >
              <X />
            </Button>
          </div>
        </ModalTitle>
        <ModalContent>
          <div className="flex flex-col gap-4">
            <div>
              Stay in the loop and be the first to sign up! Leave your email
              here:
            </div>
            <TextInput></TextInput>

            <Button onPress={() => setPremiumModal(false)}>Count Me In!</Button>

            <div>TODO: Style this modal</div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
